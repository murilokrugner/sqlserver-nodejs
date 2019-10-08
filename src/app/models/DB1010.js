/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DB1010', {
    DB1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DB1_NRAVRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DB1_EMISSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DB1_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DB1_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DB1_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DB1_TIPONF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DB1_NRDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    DB1_ENTREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DB1_HORA1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DB1_ENTREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DB1_HORA2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DB1_IDVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DB1_HOMOLO: {
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
    tableName: 'DB1010'
  });
};
