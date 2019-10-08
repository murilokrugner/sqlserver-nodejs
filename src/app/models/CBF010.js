/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CBF010', {
    CBF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CBF_DE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CBF_PARA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CBF_MSG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CBF_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CBF_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CBF_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CBF_DATAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CBF_HORAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CBF_RESPON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CBF_ROTINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CBF_KEYB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    CBF_PENDEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    tableName: 'CBF010'
  });
};
