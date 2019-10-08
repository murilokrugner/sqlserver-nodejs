/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FV4010', {
    FV4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FV4_SITUAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FV4_IDCAMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    FV4_DSCAMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    FV4_TPCAMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FV4_TAMCAM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FV4_DECCAM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FV4_OBGCAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FV4_CSPCAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FV4_PICCAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                             '
    },
    FV4_OPCOES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    FV4_VALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                '
    },
    FV4_WHEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    FV4_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FV4_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FV4_TAGXML: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'FV4010'
  });
};
