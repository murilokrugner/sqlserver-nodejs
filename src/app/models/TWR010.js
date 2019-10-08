/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TWR010', {
    TWR_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TWR_CODMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TWR_DESTIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TWR_FILPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TWR_NUMPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TWR_PEDIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TWR_ATUFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TWR_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TWR_LOJACL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TWR_SAIDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TWR_SAISER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TWR_SAIITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TWR_SDOCS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TWR_ENTDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TWR_ENTSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TWR_ENTITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TWR_SDOCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TWR_QTDSAI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TWR_QTDRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    tableName: 'TWR010'
  });
};
