/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CD0010', {
    CD0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CD0_TPMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CD0_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CD0_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CD0_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CD0_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CD0_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CD0_DOCENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CD0_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CD0_SERENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CD0_ESPECI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CD0_FORNE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CD0_LOJENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CD0_EMISSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CD0_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD0_VUNIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD0_VALBST: {
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
    },
    CD0_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CD0_SDOCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CD0_CHVNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    CD0_RESPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CD0_VLUNRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD0_NUMDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CD0_VLUNOP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD0_CHNFRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    CD0_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                    '
    },
    CD0_ITNFRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CD0_VLUNCR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD0_MOTRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CD0_NRNFRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CD0_ALQSTE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD0_PANFRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CD0_SRNFRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CD0_BSULMT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD0_PICMSE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD0_CODDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CD0_ITENFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CD0_METINC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CD0_LJPANF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CD0_FCPST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'CD0010'
  });
};
