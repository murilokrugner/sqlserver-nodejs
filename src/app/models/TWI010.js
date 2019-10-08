/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TWI010', {
    TWI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TWI_BASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TWI_QTDSAI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TWI_QTDRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TWI_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TWI_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TWI_IDREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TWI_NUMNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TWI_SERNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TWI_SDOCNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TWI_ITEMNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TWI_EXIGNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TWI_LIBERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TWI_DTRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TWI_DTSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TWI_FILNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    tableName: 'TWI010'
  });
};
