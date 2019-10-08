/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CC6010', {
    CC6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CC6_STUF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CC6_REFLEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CC6_TPAPUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CC6_RESPON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CC6_INFLUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CC6_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CC6_CODAJU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CC6_CODLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CC6_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                               '
    },
    CC6_DESCD: {
      type: "IMAGE",
      allowNull: true
    },
    CC6_DESCR2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CC6_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CC6_TPREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CC6_CLANAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    },
    CC6_AGRUPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CC6_TPIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CC6_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CC6_GNRESE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CC6_TPMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CC6_CODUTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CC6_CODCRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'CC6010'
  });
};
