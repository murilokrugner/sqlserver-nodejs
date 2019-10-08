/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AB1010', {
    AB1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AB1_NRCHAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AB1_EMISSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AB1_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AB1_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AB1_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AB1_HORAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AB1_CONTAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AB1_TEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    AB1_ATEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    AB1_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AB1_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AB1_REGIAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AB1_NUMTMK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    tableName: 'AB1010'
  });
};
