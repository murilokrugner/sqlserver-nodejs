/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RC0010', {
    RC0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RC0_CODTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RC0_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RC0_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    RC0_AGRUPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RC0_PREFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RC0_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RC0_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RC0_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RC0_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RC0_VERBAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                        '
    },
    RC0_ALIAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RC0_FILTRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    RC0_FILTRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    RC0_FILTRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RC0_TIPTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RC0_DMVENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RC0_MESPGT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RC0_DSVENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RC0_ANTPGT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RC0_ALIADV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RC0_CPODTV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RC0_FILTDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    RC0_CPODTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RC0_DIAUTI: {
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
    RC0_TPRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RC0_CODRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RC0_GERBEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'RC0010'
  });
};
