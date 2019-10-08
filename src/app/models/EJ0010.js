/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EJ0010', {
    EJ0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EJ0_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EJ0_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EJ0_ENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EJ0_CHITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    EJ0_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EJ0_CONSLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EJ0_CHUSLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    EJ0_RE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EJ0_ADICAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EJ0_CRITER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EJ0_MNTOBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    EJ0_CONDBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EJ0_VALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
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
    tableName: 'EJ0010'
  });
};
